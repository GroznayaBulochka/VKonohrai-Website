(() => {
  const recipient = "contact@vkonohrai.me";
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  const status = form.querySelector("[data-contact-form-status]");
  const providerLinks = [...form.querySelectorAll("[data-mail-provider]")];
  const choiceDialog = document.querySelector("[data-email-choice-dialog]");
  const choiceProviderLinks = [...document.querySelectorAll("[data-email-choice-provider]")];
  const choiceCloseButton = document.querySelector("[data-email-choice-close]");
  const choiceCopyButton = document.querySelector("[data-email-choice-copy]");
  const choiceStatus = document.querySelector("[data-email-choice-status]");
  let choiceTrigger = null;
  const languageCopy = {
    pl: {
      subject: "Kontakt ze strony CV",
      greeting: "Dzień dobry,",
      name: "Imię i nazwisko",
      replyTo: "E-mail do odpowiedzi",
      opened: "Gotowa wiadomość została otwarta w nowej karcie.",
      copied: "Adres e-mail został skopiowany."
    },
    en: {
      subject: "Contact from CV website",
      greeting: "Hello,",
      name: "Full name",
      replyTo: "Reply email",
      opened: "The prepared message has opened in a new tab.",
      copied: "The email address has been copied."
    },
    ru: {
      subject: "Контакт со страницы CV",
      greeting: "Здравствуйте,",
      name: "Имя и фамилия",
      replyTo: "E-mail для ответа",
      opened: "Готовое сообщение открыто в новой вкладке.",
      copied: "Адрес электронной почты скопирован."
    }
  };

  const getLanguage = () => languageCopy[document.documentElement.lang] || languageCopy.pl;
  const getFormValues = () => {
    const data = new FormData(form);
    return {
      name: String(data.get("name") || "").trim(),
      replyTo: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
      provider: String(data.get("mailProvider") || "gmail")
    };
  };

  const createMessageBody = ({ name, replyTo, message }, copy) => [
    copy.greeting,
    "",
    message,
    "",
    `${copy.name}: ${name}`,
    `${copy.replyTo}: ${replyTo}`
  ].join("\n");

  const createWebmailUrl = (provider, subject, body = "") => {
    if (provider === "outlook") {
      const params = new URLSearchParams({ to: recipient, subject });
      if (body) {
        params.set("body", body);
      }
      return `https://outlook.live.com/mail/0/deeplink/compose?${params.toString()}`;
    }

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: recipient,
      su: subject
    });
    if (body) {
      params.set("body", body);
    }
    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  const updateLinks = () => {
    const copy = getLanguage();
    const values = getFormValues();
    const subject = values.subject || copy.subject;
    const hasContent = values.name || values.replyTo || values.message;
    const body = hasContent ? createMessageBody(values, copy) : "";

    providerLinks.forEach((link) => {
      link.href = createWebmailUrl(link.dataset.mailProvider, subject, body);
    });
    document.querySelectorAll("[data-email-compose]").forEach((link) => {
      link.href = createWebmailUrl(link.dataset.emailCompose || "gmail", copy.subject);
    });
    choiceProviderLinks.forEach((link) => {
      link.href = createWebmailUrl(link.dataset.emailChoiceProvider, copy.subject);
    });
  };

  const closeChoiceDialog = (restoreFocus = true) => {
    if (!choiceDialog?.open) {
      return;
    }

    if (typeof choiceDialog.close === "function") {
      choiceDialog.close();
    } else {
      choiceDialog.removeAttribute("open");
    }

    if (restoreFocus) {
      choiceTrigger?.focus({ preventScroll: true });
    }
  };

  const openChoiceDialog = (trigger) => {
    if (!choiceDialog) {
      return false;
    }

    choiceTrigger = trigger;
    if (choiceStatus) {
      choiceStatus.textContent = "";
    }
    updateLinks();

    if (typeof choiceDialog.showModal === "function") {
      choiceDialog.showModal();
    } else {
      choiceDialog.setAttribute("open", "");
    }
    choiceCloseButton?.focus({ preventScroll: true });
    return true;
  };

  const copyRecipient = async () => {
    try {
      await navigator.clipboard.writeText(recipient);
    } catch {
      const input = document.createElement("textarea");
      input.value = recipient;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    if (choiceStatus) {
      choiceStatus.textContent = getLanguage().copied;
    }
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-email-compose]");
    if (!trigger || !openChoiceDialog(trigger)) {
      return;
    }
    event.preventDefault();
  });

  choiceCloseButton?.addEventListener("click", () => closeChoiceDialog());
  choiceCopyButton?.addEventListener("click", copyRecipient);
  choiceProviderLinks.forEach((link) => {
    link.addEventListener("click", () => setTimeout(() => closeChoiceDialog(false), 0));
  });
  choiceDialog?.addEventListener("click", (event) => {
    if (event.target === choiceDialog) {
      closeChoiceDialog();
    }
  });
  choiceDialog?.addEventListener("close", () => {
    choiceTrigger?.focus({ preventScroll: true });
  });

  form.addEventListener("input", updateLinks);
  form.addEventListener("change", updateLinks);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const copy = getLanguage();
    const values = getFormValues();
    const subject = values.subject || copy.subject;
    const body = createMessageBody(values, copy);
    const url = createWebmailUrl(values.provider, subject, body);

    window.open(url, "_blank", "noopener,noreferrer");
    if (status) {
      status.textContent = copy.opened;
    }
  });

  document.addEventListener("languagechange", () => {
    if (status) {
      status.textContent = "";
    }
    if (choiceStatus) {
      choiceStatus.textContent = "";
    }
    updateLinks();
  });

  updateLinks();
})();
