import axios from "axios";
import { Palette } from "lucide-react";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuContainer from "../components/MenuContainer";
import SearchBox from "../components/SearchBox";
import useArtworkStore from "../stores/ArtworkStore";
import { useFilterMenuStore } from "../stores/MenuStore";

const ArtWork = () => {
  const { data, addArtwork } = useArtworkStore();
  const { filterMenu, updateFilterMenu } = useFilterMenuStore();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtworkData = async () => {
      if (data !== undefined && data.length > 0) return;

      const response = await axios(
        import.meta.env.VITE_API_ENDPOINT + "/getArtWorks"
      );
      addArtwork(response.data);
      setCategoryList(response.data);
    };

    fetchArtworkData();
  }, []);

  const handleSearch = (value) => {
    navigate(`/artwork/photoinfo/search?value=${value}`, { replace: true });
  };

  const setCategoryList = (data) => {
    let categories = [
      {
        icon: <Palette strokeWidth={2} />,
        title: "All",
        redirectUrl: `/artwork/all`,
      },
    ];

    // Use a Set to track unique titles
    const uniqueTitles = new Set();

    // Add the "All" category to the unique titles set
    uniqueTitles.add("All");

    data.forEach((artwork) => {
      if (!uniqueTitles.has(artwork.category)) {
        uniqueTitles.add(artwork.category);
        categories.push({
          icon: <Palette strokeWidth={2} />,
          title: artwork.category,
          redirectUrl: `/artwork/${artwork.category.toLowerCase()}`,
        });
      }
    });

    updateFilterMenu(categories);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-zinc-300 border-t border-b shadow-md">
        {filterMenu !== undefined && filterMenu.length > 0 ? (
          <div className="flex flex-row justify-between bg-white">
            <div className="hidden md:flex">
              <MenuContainer
                data={filterMenu}
                config={{ orientation: "row" }}
              />
            </div>

            <SearchBox searchFn={(value) => handleSearch(value)} />
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default ArtWork;
