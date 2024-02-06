import {
  FrameContainer,
  FrameImage,
  FrameButton,
  useFramesReducer,
  getPreviousFrame,
  validateActionSignature,
  FrameInput,
} from "frames.js/next/server";

const reducer = (state: any, action: any) => ({ count: state.count + 1 });

export default async function Home(props: any) {

  const previousFrame = getPreviousFrame(props.searchParams);
  const [state, dispatch] = useFramesReducer(
    reducer,
    { count: 0 },
    previousFrame
  );

  return (
    <FrameContainer
      postUrl="/frames"
      state={state}
      previousFrame={previousFrame}
    >
      <FrameImage src="https://picsum.photos/seed/frames.js/1146/600" />
      <FrameInput text='Enter your ens address'/>
      <FrameButton onClick={dispatch}>{state.count}</FrameButton>
    </FrameContainer>
  );
}