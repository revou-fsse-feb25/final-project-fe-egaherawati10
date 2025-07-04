'use client';

export function StatCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex flex-col bg-white rounded-md p-4">
            <span className="text-sm text-green-950">{label}</span>
            <span className="text-2xl font-semibold">{value}</span>
        </div>
    );
}