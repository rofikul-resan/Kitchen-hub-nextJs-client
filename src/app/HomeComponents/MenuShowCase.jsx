import MenuCard from "@/components/MenuCard";
import SectionHeader from "@/components/SectionHeader";

const MenuShowCase = () => {
  return (
    <div>
      <SectionHeader title={"Our best Menu"} />
      <div className="grid md:grid-cols-2 gap-4">
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
      </div>
    </div>
  );
};

export default MenuShowCase;
