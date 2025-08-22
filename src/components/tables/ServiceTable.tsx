"use client";
import { useState } from "react";
import { serviceItem } from "@/lib/mockServiceItem";
import { ServiceItem } from "@/types/serviceItem";

interface ServicesItem {
  id: number;
  service?: ServiceItem;
  amount: number;
}

export default function ServiceTable() {
  const [items, setItems] = useState<ServicesItem[]>([
    { id: 1, amount: 1},
  ]);

  const handleAddRow = () => {
    setItems([...items, { id: items.length + 1, amount: 1 }]);
  };

  const handleRemoveRow = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleChangeLayanan = (id: number, name: string) => {
    const service = serviceItem.find((s) => s.name === name);
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, service } : item
      )
    );
  };

  const handleChangeField = (id: number, field: "amount", value: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const grandTotal = items.reduce((acc, item) => {
    if (!item.service) return acc;
    const subtotal = item.service.price * item.amount;
    return acc + subtotal;
  }, 0);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold mb-2">Medical Service Transactions</h2>
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="border p-2">Num</th>
            <th className="border p-2">Service Code</th>
            <th className="border p-2">Service Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Sub Total</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const subtotal = item.service
              ? item.service.price * item.amount
              : 0;

            return (
              <tr key={item.id}>
                <td className="border p-2 text-center">{item.id}</td>
                <td className="border p-2">
                  <select
                    className="w-full border rounded p-1"
                    value={item.service?.name || ""}
                    onChange={(e) =>
                      handleChangeLayanan(item.id, e.target.value)
                    }
                  >
                    <option value="">-- Choose --</option>
                    {serviceItem.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border p-2">{item.service?.name || "-"}</td>
                <td className="border p-2 text-right">
                  {item.service ? item.service.price.toLocaleString() : "0"}
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-20 border rounded p-1"
                    value={item.amount}
                    min={1}
                    onChange={(e) =>
                      handleChangeField(item.id, "amount", parseInt(e.target.value))
                    }
                  />
                </td>
                <td className="border p-2 text-right">
                  {subtotal.toLocaleString()}
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleRemoveRow(item.id)}
                    className="text-red-600 text-bold hover:underline"
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
        + Add Examination
      </button>

      <div className="flex justify-end mt-4 font-bold">
        Grand Total:{" "}
        <span className="ml-2">{grandTotal.toLocaleString()}</span>
      </div>
    </div>
  );
}