"use client";

import ShopName from "./components/shopName";
import LogoImage from "./components/logoImageConfig";
import CardBackground from "./components/background";
import ShopAddress from "./components/shopAddress";
import ShopDetails from "./components/shopDetails";
import AddLinks from "./components/addLinks";
import CreateCardActionButtons from "./components/actoinButtons";

const CreateCardPane = () => {
  return (
    <div className="w-full grid grid-cols-2">
      <div className="col-span-1">
        {/* <CardDetails /> */}
        <CardBackground />
        <ShopName />
        <ShopDetails />
        <ShopAddress />
      </div>
      <div className="col-span-1">
        <LogoImage />
        <AddLinks />
        <CreateCardActionButtons />
      </div>
    </div>
  );
};

export default CreateCardPane;

// Functions
/**
 * Category - Select or Create new
 *
 * Card type (Business card, shopping card)
 *
 * Choose template
 *
 * Title of the Card
 *
 * Description of the card
 *
 * Add media
 *
 * Transition timer for each media
 *
 * Add text
 *
 * Add Business adddress (optional)
 *
 * Add Business description
 *
 * Add social media links
 *
 * Add Slide-up (slide up content to display more text)
 *
 * Add slide-up text
 */
