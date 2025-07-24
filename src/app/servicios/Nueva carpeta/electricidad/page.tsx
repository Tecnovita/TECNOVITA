export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 md:text-5xl lg:text-6xl">
        ¡Bienvenido a mi App Responsiva!
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Esta es una página de ejemplo diseñada para ser accesible en cualquier dispositivo,
        desde tu smartphone hasta tu Smart TV.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
        Explorar Ahora
      </button>
    </main>
  );
}