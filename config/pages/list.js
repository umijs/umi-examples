import router from 'umi/router';

export default () => {
  return (
    <div>
      <h1>List Page</h1>
      <button
        onClick={() => {
          router.goBack();
        }}
      >
        go back
      </button>
    </div>
  );
};
