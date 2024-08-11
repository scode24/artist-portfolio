import { Filter, Search } from "lucide-react";
import React, { useState } from "react";
import {
  useFilterMenuStore,
  useFilterOpenCloseStore,
} from "../stores/MenuStore";
import DropdownMenu from "./DropdownMenu";

const SearchBox = (props) => {
  const [open, setOpen] = useState(false);
  const { filterOpen, changeFilterState } = useFilterOpenCloseStore();
  const [hoverStyle, setHoverStyle] = useState();
  const { filterMenu } = useFilterMenuStore();
  const [searchValue, setSearchValue] = useState("");
  const searchFn = props.searchFn;

  const highlightOnHover = (state) => {
    if (state === true) {
      setHoverStyle("bg-indigo-500");
    } else {
      setHoverStyle("bg-none");
    }
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const searchArtworks = (artworks, searchValue) => {
    searchValue = searchValue.toLowerCase();

    return artworks.filter((artwork) => {
      return (
        (artwork.title && artwork.title.toLowerCase().includes(searchValue)) ||
        (artwork.artist &&
          artwork.artist.toLowerCase().includes(searchValue)) ||
        (artwork.category &&
          artwork.category.toLowerCase().includes(searchValue)) ||
        (artwork.about && artwork.about.toLowerCase().includes(searchValue)) ||
        (artwork.artDescription &&
          artwork.artDescription.materialUsed &&
          artwork.artDescription.materialUsed
            .toLowerCase()
            .includes(searchValue)) ||
        (artwork.artDescription &&
          artwork.artDescription.paperType &&
          artwork.artDescription.paperType
            .toLowerCase()
            .includes(searchValue)) ||
        (artwork.layout && artwork.layout.toLowerCase().includes(searchValue))
      );
    });
  };

  return open ? (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => onClickFn()}
      onMouseEnter={() => highlightOnHover(true)}
      onMouseLeave={() => highlightOnHover(false)}
    >
      <div className="flex flex-row p-3">
        <div className="flex flex-col justify-center items-center mr-3">
          <Search strokeWidth={2} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>Search</span>
        </div>
      </div>
      <div className={"h-[3px] " + hoverStyle}></div>
    </div>
  ) : (
    <div className="flex flex-row relative rounded-full border m-3 px-3 shadow-inner border-zinc-300 w-full md:w-fit">
      <input
        className="m-2 w-full"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearchInput(e)}
      />
      <div
        className="flex flex-col justify-center my-2 mr-3 cursor-pointer"
        onClick={() => searchFn(searchValue)}
      >
        <Search strokeWidth={2} />
      </div>
      <div
        className="flex flex-col justify-center my-2 cursor-pointer md:hidden"
        onClick={() => changeFilterState(true)}
      >
        <Filter strokeWidth={2} />
      </div>
      {filterOpen ? <DropdownMenu data={filterMenu} /> : null}
    </div>
  );
};

export default SearchBox;
