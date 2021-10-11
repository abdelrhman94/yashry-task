import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const { createSliderWithTooltip } = Slider;
//  const Range = createSliderWithTooltip(Slider.Range);

const PriceRange = () => {
  const [price, setPrice] = useState([1, 1000]);
  return (
    <>
      <div className="col-6 col-md-3 mt-5 mb-5">
        <div className="px-5">
          <Range
            marks={{
              1: `$1`,
              1000: `$1000`,
            }}
            min={1}
            max={1000}
            defaultValue={[1, 1000]}
            tipFormatter={(value) => `$${value}`}
            tipProps={{
              placement: "top",
              visible: true,
            }}
            value={price}
            onChange={(price) => setPrice(price)}
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
