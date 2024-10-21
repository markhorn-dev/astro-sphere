import MeteorShower from "@/components/welcome/MeteorShower";
import TwinklingStars from "@/components/welcome/TwinklingStars";

export default function Galaxy() {
  return (
    <div id="galaxy" className="fixed inset-0">
      <div className="invisible">
        <TwinklingStars />
      </div>
      <MeteorShower />
    </div>
  );
}
