export default function Home() {
  return (
    <div>
      <h2>Tailwindをさわっていく</h2>
      <div className='card'>.card</div>
      <div className='h-32 overflow-y-scroll bg-slate-300 hidden-scrollbar'>
        <div className='h-80 bg-red-200 relative'>
          <p>start</p>
          <p className='absolute bottom-0'>end</p>
        </div>
      </div>
    </div>
  );
}
