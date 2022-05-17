import "./SidebarOptions.css";

function SidebarOptions({ active, text, Icon }) {
  //Icon is a component itself.
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
export default SidebarOptions;
