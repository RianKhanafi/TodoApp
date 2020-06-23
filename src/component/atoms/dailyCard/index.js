import React from "react";
import PropTypes from "prop-types";
import { Color } from "../../colors";

const DailyCard = (props) => {
  const { mainCard, paragraph, list } = props;
  let classDailyCard = {
    mainCard: mainCard && "bg-gray-200 hover:bg-gray-500",
    icon: mainCard && !paragraph ? "bg-white" : "bg-gray-200",
    height: mainCard && !list ? "h-16" : "h-auto",
    iconPosition: mainCard ? "items-center" : "items-start",
  };

  let style = {
    backgroundColor: mainCard ? Color.primary : "",
    Color: mainCard ? Color.textPrimary : "",
  };

  return (
    <div className="flex items-center mt-6">
      <div className="mr-6 flex items-center">
        <span>=</span>
      </div>
      <div className="w-full">
        <div
          className={`w-full ${classDailyCard.height} ${classDailyCard.mainCard} rounded-lg flex ${classDailyCard.iconPosition}`}
          style={style}
        >
          <div className={`w-1/6  flex items-start`}>
            <div
              className={`w-10 h-10 ${classDailyCard.icon} bg-white mx-4 rounded-lg`}
            ></div>
          </div>
          <div className="w-4/6  h-auto flex-col items-center">
            <div className="text-xl">Wake up</div>
            {list && !mainCard && (
              <>
                <div> + lorem ipsum dolor</div>
                <div> + lorem ipsum dolor</div>
                <div> + lorem ipsum dolor</div>
                <div> + lorem ipsum dolor</div>
              </>
            )}
            {paragraph && !mainCard && (
              <p>
                Lorem Ipsum refers to a dummy block of text that is often used
                in publishing and graphic design to fill gaps in the page before
                the actual words are put into the finished product.
              </p>
            )}
          </div>
          <div className="w-1/6  h-12 flex items-center">
            <span>8.00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
DailyCard.defaultProps = {
  mainCard: true,
  list: false,
  paragraph: false,
};
DailyCard.propTypes = {
  mainCard: PropTypes.bool,
  list: PropTypes.bool,
  paragraph: PropTypes.bool,
};

export default DailyCard;
