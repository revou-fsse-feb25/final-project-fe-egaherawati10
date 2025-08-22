// "use client";
// import { useEMRStore } from "@/lib/store";

// export default function ServicesPage({ 
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const pid = Number(id);
// }

//   const { services, addService } = useEMRStore();

//   const patientServices = services.filter((s) => s.patientId === pid);

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-green-900 mb-4">Services for patient #{pid}</h2>
//       <button
//         className="bg-green-900 text-white px-4 py-2 rounded"
//         onClick={() =>
//           addService({
//             id: Date.now(),
//             patientId: pid,
//             name: "Blood Test",
//             status: "planned",
//           })
//         }
//       >
//         + Add Service
//       </button>
//       <ul className="mt-4 space-y-2">
//         {patientServices.map((s) => (
//           <li key={s.id} className="border p-2 rounded">
//             {s.name} – {s.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }