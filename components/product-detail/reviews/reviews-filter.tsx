
export default function ReviewsFilter() {
    return (
        <div className="mb-10">
            <p className="text-sm text-gray-500 mb-3">FILTER</p>
            <div className="flex flex-wrap gap-3">
                <select className="border px-4 py-3 text-sm flex justify-between items-center">
                    <option value=""> SKIN </option>
                </select>
                <select className="border px-4 py-3 text-sm flex justify-between items-center">
                    <option value="">AGE RANGE </option>
                </select>
                <select className="border px-4 py-3 text-sm flex justify-between items-center">
                    <option value="">SENSITIVE SKIN </option>
                </select>
                <select className="border px-4 py-3 text-sm flex justify-between items-center">
                    <option value="">TYPOLOGY </option>
                </select>
            </div>
        </div>
    )
}
