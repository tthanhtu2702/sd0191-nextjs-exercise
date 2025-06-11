export default function CategoryPage() {
  const categories = [
    'WordPress',
    'HTML',
    'Photography',
    'UI',
    'Mockups',
    'Branding'
  ];

  return (
    <main>
      <h1>News Categories</h1>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </main>
  );
}