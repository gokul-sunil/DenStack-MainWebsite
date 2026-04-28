import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  practice: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  practice,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{quote}</p>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {author
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-500">
            {role} • {practice}
          </div>
        </div>
      </div>
    </div>
  );
}
