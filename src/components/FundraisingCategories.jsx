import { HeartPulse, Candle, Umbrella, Ribbon, GraduationCap, Sun, Dog, Store, Football } from "lucide-react";

const categories = [
  { icon: <HeartPulse />, title: "Medical" },
  { icon: <Candle />, title: "Memorial" },
  { icon: <Umbrella />, title: "Emergency" },
  { icon: <Ribbon />, title: "Charity" },
  { icon: <GraduationCap />, title: "Education" },
  { icon: <Sun />, title: "Faith" },
  { icon: <Dog />, title: "Animal" },
  { icon: <Store />, title: "Business" },
  { icon: <Football />, title: "Sports" },
];

export default function FundraisingCategories() {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <h2 className="text-2xl font-semibold mb-4">Fundraising categories on GiveHope</h2>
      <p className="text-gray-600 max-w-xl mb-6">
        You can fundraise for almost anything on GiveHope. Explore a few of the ways below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3">
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </div>
            <span>&rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
