export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 bg-white shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">
        VoyageAI
      </h1>

      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Features</li>
        <li className="cursor-pointer hover:text-blue-600">Trips</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
      </ul>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}