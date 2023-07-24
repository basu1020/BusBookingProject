import ReviewContainer from "./ReviewContainer";

const ReviewSection = () => {
  return (
    <div className="relative w-[100vw] h-[21.19rem] mb-10">
      <div className="flex flex-row justify-center items-center bg-gainsboro w-[100vw] h-[21.19rem]" />
      <ReviewContainer customerSince2020Left="11.81rem" />
      <ReviewContainer customerSince2020Left="34.31rem" />
      <ReviewContainer customerSince2020Left="56.81rem" />
    </div>
  );
};

export default ReviewSection;
