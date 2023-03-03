import MetaHead from '@/components/shared/meta-head';

function Custom404() {
  return (
    <>
      <MetaHead
        title="404 Page not Found"
        description="404 Page not Found"
        index="noindex"
      />
      <h1>404 Page not Found</h1>
      <p>Page not found, please back to home.</p>
    </>
  );
}

export default Custom404;
