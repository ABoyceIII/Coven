import {
  LayoutDashboard,
  House,
  Eye,
  CalendarDays,
  ListTodo,
  MessageSquareMore,
} from "lucide-react";
import "../../css/Navbar.css";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="NavbarButton">
        <LayoutDashboard
          onClick={() => (window.location.href = "/dashboard")}
        />
      </div>

      <div className="NavbarButton">
        <House onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="NavbarButton">
        <Eye onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="NavbarButton">
        <CalendarDays onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="NavbarButton">
        <ListTodo onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="NavbarButton">
        <MessageSquareMore
          onClick={() => (window.location.href = "/dashboard")}
        />
      </div>
    </div>
  );
}
