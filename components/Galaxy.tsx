import MeteorShower from "@/components/MeteorShower";
import TwinklingStars from "@/components/TwinklingStars";

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
