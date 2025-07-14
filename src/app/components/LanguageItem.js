export default function LanguageItem({ iconPath, colorClass, name }) {
  return (
    <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
      <svg
        className={`w-5 h-5 ${colorClass}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{ __html: iconPath }}
      />
      <span className="text-sm text-gray-200 font-medium">{name}</span>
    </div>
  );
}
