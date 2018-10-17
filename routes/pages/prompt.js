import Prompt from 'umi/prompt';

export default () => {
  return (
    <>
      <h1>Prompt</h1>
      <Prompt
        when={true}
        message={(location) => {
          return window.confirm(`confirm to leave to ${location.pathname}?`);
        }}
      />
    </>
  );
}
