/* ============================================================
   BRAIN AFRICA LABS
   TikTok Audit Dashboard
   AUDIT.JS — V1
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  console.log(
    "Brain Africa Labs — TikTok Audit Dashboard loaded."
  );

  /*
   * Audit navigation tracking.
   * This does not publish anything by itself.
   * It only records the user's navigation locally.
   */

  const links = document.querySelectorAll("a");

  links.forEach((link) => {

    link.addEventListener("click", () => {

      const label =
        link.textContent.trim() ||
        link.getAttribute("href") ||
        "unknown";

      const auditEvent = {
        event: "navigation",
        label,
        href: link.getAttribute("href"),
        timestamp: new Date().toISOString()
      };

      console.log(
        "TikTok Audit Event:",
        auditEvent
      );

      try {

        const history =
          JSON.parse(
            localStorage.getItem(
              "brain_africa_audit"
            ) || "[]"
          );

        history.push(auditEvent);

        localStorage.setItem(
          "brain_africa_audit",
          JSON.stringify(
            history.slice(-50)
          )
        );

      } catch (error) {

        console.warn(
          "Audit localStorage unavailable:",
          error
        );

      }

    });

  });

});