import { currentYear } from "@lib/utils";

export default function CopyrightDate() {

  return (
    <div class="text-sm mt-2">&copy; {currentYear} | All rights reserved</div>
  );
}
