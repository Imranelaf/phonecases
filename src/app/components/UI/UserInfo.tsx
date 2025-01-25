function UserInfo() {
  return (
    <div>
    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
        Full name
      </label>
      <input
        type="text"
        id="card-number"
        className="w-full p-2 border rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
        placeholder="Jhon doe"
      />
      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
        Adress
      </label>
      <input
        type="text"
        id="card-number"
        className="w-full p-2 border rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
        placeholder="123 street, city"
      />
      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
        E-mail
      </label>
      <input
        type="text"
        id="card-number"
        className="w-full p-2 border rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
        placeholder="example@mail.com"
      />
      </div>
  )
}

export default UserInfo