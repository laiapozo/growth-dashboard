const USER = {
  name: "Alice",
  surname: "Smith",
  email: "alice@gmail.com",
};

function Header() {
  return (
    <div className="h-16 bg-white border-b border-border-gray flex items-center justify-between px-8">
      <h1 className="text-xl font-semibold text-almost-black">
        Welcome, {USER.name}
      </h1>
      <div className="flex items-center gap-3">
        <i className="fa-solid fa-circle-user text-3xl text-brand-red"></i>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-almost-black">
            {USER.name} {USER.surname}
          </span>
          <span className="text-xs text-mid-gray">{USER.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
