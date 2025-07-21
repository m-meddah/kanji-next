export default function GradeNotFound() {
  return (
    <main className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-600">Oops !</h1>
      <p className="mt-4 text-gray-700">This page does not exist.</p>
      <p className="text-sm text-gray-500">Try a grade between 1 and 6, or 8.</p>
    </main>
  );
}
