"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";

const formEndpoint = "https://formspree.io/f/xoeewzqy";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const isSubmittingRef = useRef(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const openFromQuickDock = () => {
      setSubmissionStatus("idle");
      setIsOpen(true);
    };

    window.addEventListener("portfolio:open-contact-form", openFromQuickDock);

    return () =>
      window.removeEventListener(
        "portfolio:open-contact-form",
        openFromQuickDock,
      );
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const activeTrigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event) => {
      if (event.key === "Escape" && !isSubmittingRef.current) {
        setIsOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([type="hidden"]):not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled])',
        );
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      activeTrigger?.focus();
    };
  }, [isOpen]);

  const openForm = () => {
    setSubmissionStatus("idle");
    setIsOpen(true);
  };

  const closeForm = () => {
    if (!isSubmitting) {
      setIsOpen(false);
    }
  };

  const updateFormValue = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    const submission = new FormData(event.currentTarget);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: submission,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setSubmissionStatus("success");
      setFormValues({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Unable to submit the contact form:", error);
      setSubmissionStatus("error");
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:khanarmughan71@gmail.com?subject=${encodeURIComponent(
    "Project inquiry",
  )}&body=${encodeURIComponent(
    `Name: ${formValues.name}\nEmail: ${formValues.email}\nProject type: ${
      formValues.projectType || "Not specified"
    }\n\n${formValues.message}`,
  )}`;

  return (
    <>
      <Reveal as="section" className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>
            Let&apos;s make
            <br />
            something great.
          </h2>
          <p>Tell me what you&apos;re building. I&apos;d love to hear about it.</p>
        </div>
        <button
          ref={triggerRef}
          type="button"
          className="contact-button"
          onClick={openForm}
        >
          Start a conversation <Icon name="arrow" size={18} />
        </button>
        <span className="contact-decoration" aria-hidden="true">
          OPEN TO IDEAS
        </span>
      </Reveal>

      {isOpen &&
        createPortal(
          <div
            className="contact-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeForm();
              }
            }}
          >
            <section
              className="contact-modal"
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              aria-describedby="contact-modal-description"
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="contact-modal-close"
                aria-label="Close contact form"
                onClick={closeForm}
                disabled={isSubmitting}
              >
                <span aria-hidden="true">&times;</span>
              </button>

              {submissionStatus === "success" ? (
                <div className="contact-success" role="status">
                  <span className="contact-success-mark" aria-hidden="true">
                    ✓
                  </span>
                  <p className="eyebrow">Message sent</p>
                  <h2 id="contact-modal-title">Thanks for reaching out.</h2>
                  <p id="contact-modal-description">
                    Your project note is on its way. I&apos;ll get back to you
                    as soon as I can.
                  </p>
                  <button
                    type="button"
                    className="contact-submit"
                    onClick={closeForm}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="eyebrow">Let&apos;s talk</p>
                  <h2 id="contact-modal-title">Tell me about your project.</h2>
                  <p
                    className="contact-modal-description"
                    id="contact-modal-description"
                  >
                    Share a few details and I&apos;ll reply by email.
                  </p>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="_replyto"
                      value={formValues.email}
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value={`Portfolio inquiry from ${formValues.name || "visitor"}`}
                    />
                    <div className="contact-form-row">
                      <label className="contact-field">
                        <span>Your name</span>
                        <input
                          autoComplete="name"
                          name="name"
                          type="text"
                          value={formValues.name}
                          onChange={updateFormValue}
                          placeholder="Jane Smith"
                          maxLength={100}
                          required
                        />
                      </label>
                      <label className="contact-field">
                        <span>Email address</span>
                        <input
                          autoComplete="email"
                          name="email"
                          type="email"
                          value={formValues.email}
                          onChange={updateFormValue}
                          placeholder="you@example.com"
                          maxLength={254}
                          required
                        />
                      </label>
                    </div>

                    <label className="contact-field">
                      <span>What do you need help with?</span>
                      <select
                        name="project_type"
                        value={formValues.projectType}
                        onChange={(event) =>
                          setFormValues((current) => ({
                            ...current,
                            projectType: event.target.value,
                          }))
                        }
                      >
                        <option value="">Choose a project type (optional)</option>
                        <option value="Website design and development">
                          Website design and development
                        </option>
                        <option value="Web application">Web application</option>
                        <option value="Freelance collaboration">
                          Freelance collaboration
                        </option>
                        <option value="Something else">Something else</option>
                      </select>
                    </label>

                    <label className="contact-field">
                      <span>Your message</span>
                      <textarea
                        name="message"
                        value={formValues.message}
                        onChange={updateFormValue}
                        placeholder="A little about your project, goals, and timeline..."
                        rows={4}
                        maxLength={4000}
                        required
                      />
                    </label>

                    <label className="contact-honeypot" aria-hidden="true">
                      Leave this field empty
                      <input
                        name="_gotcha"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>

                    {submissionStatus === "error" && (
                      <p className="contact-form-error" role="alert">
                        Your message couldn&apos;t be sent. Please try again or
                        <a href={mailtoHref}> email me directly</a>.
                      </p>
                    )}

                    <button
                      className="contact-submit"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                      {!isSubmitting && <Icon name="arrow" size={17} />}
                    </button>
                    <p className="contact-form-note">
                      Your details are only used to reply to your inquiry.
                    </p>
                  </form>
                </>
              )}
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
