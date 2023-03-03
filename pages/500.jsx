import MetaHead from '@/components/shared/meta-head';

function Custom500() {
  return (
    <>
      <MetaHead
        title="500 Server Error"
        description="500 Server Error"
        index="noindex"
      />
      <h1>500 Server Error</h1>
      <p>Server internal error, please back to home.</p>
    </>
  );
}

export default Custom500;
