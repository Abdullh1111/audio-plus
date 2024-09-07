
import { CiSearch} from "react-icons/ci";

const SearchComponent = () => {
    return (
        <div className="flex">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="input input-error w-full pr-10 bg-[#F5F5F5] text-black rounded-r-none"
            />
            <div className="bg-[#DB4444] w-20 flex justify-center items-center text-white font-semibold rounded-r-3xl">
              <CiSearch className="text-2xl "></CiSearch>
            </div>
          </div>
    );
};

export default SearchComponent;