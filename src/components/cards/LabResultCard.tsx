'use client';

export interface LabResultProps {
    id: number;
    name: string;
    date: string;
    result: string;
    normalRange: string;
}

export function LabResultCard({ res }: { res: LabResultProps}) {
    return (
        <div className="bg-green-50 shadow rounded-md space-y-1 p-4">
            <h3 className="font-medium">{res.name}</h3>
            <p className="text-sm text-green-900">{ new Date(res.date).toDateString()}</p>
            <p>
                <span className="font-semibold">{res.result}</span>
                <span className="text-xs text-green-900">{res.normalRange}</span>
            </p>
        </div>
    )
}