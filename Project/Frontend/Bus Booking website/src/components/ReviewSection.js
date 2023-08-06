import ReviewContainer from "./ReviewContainer";

const ReviewSection = () => {
  return (
    <div className="w-[100vw] h-auto mb-10">
      <div className="flex flex-row flex-wrap justify-center items-center bg-gainsboro w-[100vw] min-h-[40vh] p-2" >
      <ReviewContainer />
      <ReviewContainer />
      <ReviewContainer />
      </div>
    </div>
  );
};

export default ReviewSection;
