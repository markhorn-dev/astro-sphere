export default function CopyrightDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div class="text-sm mt-2">&copy; {currentYear} | All rights reserved</div>
  );
}
