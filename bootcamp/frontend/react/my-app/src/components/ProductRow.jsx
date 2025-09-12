export default function ProductRow({ name, price, stocked }) {
  return (
    <tr>
      <td
        className={`p-2 border-b border-b-gray-300 ${
          stocked ? "" : "text-red-500"
        }`}
      >
        {name}
      </td>
      <td className="p-2 border-b border-b-gray-300">{price}</td>
    </tr>
  );
}
