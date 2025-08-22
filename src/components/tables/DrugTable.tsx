"use client";
import { medicines } from "@/lib/mockMedicine";
import { Medicine } from "@/types/medicine";
import { useState } from "react";

interface PharmacyRow {
  id: number;
  item?: Medicine;
  quantity: number;
}

export default function PharmacyTable() {
  const [rows, setRows] = useState<PharmacyRow[]>([
    { id: 1, quantity: 1 },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, quantity: 1 }]);
  };

  const handleRemoveRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleChangeItem = (id: number, name: string) => {
    const item = medicines.find((p) => p.name === name);
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, item } : row
      )
    );
  };

  const handleChangeQuantity = (id: number, value: number) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, quantity: value } : row
      )
    );
  };

  const grandTotal = rows.reduce((acc, row) => {
    if (!row.item) return acc;
    const subtotal = row.item.price * row.quantity;
    return acc + subtotal;
  }, 0);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-semibold text-green-900 mb-4">Pharmacy Transactions</h2>
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="border p-2">Num</th>
            <th className="border p-2">Medicine Code</th>
            <th className="border p-2">Medicine Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Sub Total</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const subtotal = row.item
              ? row.item.price * row.quantity
              : 0;

            return (
              <tr key={row.id}>
                <td className="border p-2 text-center">{row.id}</td>
                <td className="border p-2">
                  <select
                    className="w-full border rounded p-1"
                    value={row.item?.name || ""}
                    onChange={(e) =>
                      handleChangeItem(row.id, e.target.value)
                    }
                  >
                    <option value="">-- Choose --</option>
                    {medicines.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border p-2">{row.item?.name || "-"}</td>
                <td className="border p-2 text-right">
                  {row.item ? row.item.price.toLocaleString() : "0"}
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-20 border rounded p-1"
                    value={row.quantity}
                    min={1}
                    onChange={(e) =>
                      handleChangeQuantity(row.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td className="border p-2 text-right">
                  {subtotal.toLocaleString()}
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleRemoveRow(row.id)}
                    className="text-red-600 font-bold hover:underline"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        onClick={handleAddRow}
        className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-800"
      >
        + Add Medicine
      </button>

      <div className="flex justify-end mt-4 font-bold">
        Grand Total:{" "}
        <span className="ml-2">{grandTotal.toLocaleString()}</span>
      </div>
    </div>
  );
}