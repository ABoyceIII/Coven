import {
  LayoutDashboard,
  House,
  Eye,
  CalendarDays,
  ListTodo,
  MessageSquareMore,
} from "lucide-react";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="DashboardButton">
        <LayoutDashboard
          onClick={() => (window.location.href = "/dashboard")}
        />
      </div>

      <div className="ManagementButton">
        <House onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="PrivacyButton">
        <Eye onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="CalendarButton">
        <CalendarDays onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="TasksButton">
        <ListTodo onClick={() => (window.location.href = "/dashboard")} />
      </div>

      <div className="Chatbutton">
        <MessageSquareMore
          onClick={() => (window.location.href = "/dashboard")}
        />
      </div>
    </div>
  );
}
