import FooterStyle from "../styles/Footer.module.css";

export function Footer({ title = "" }) {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.footerContent}>
        <code>{title}</code>
        <div>Date</div>
        <div>Time</div>
      </div>
    </footer>
  );
}
