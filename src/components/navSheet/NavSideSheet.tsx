import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuSheetIcon from "@/resources/svg/menuSheet.svg";
import Image from "next/image";
import { homeData } from "@/utils/homePage";

function NavSideSheet() {
  const {
    header: { navLinksArr },
  } = homeData;

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div>
            <Image
              src={menuSheetIcon}
              alt="menuSheetIcon"
              width={25}
              height={25}
            />
          </div>
        </SheetTrigger>

        <SheetContent className="bg-zinc-700">
          <SheetHeader>
            {navLinksArr.map((el, i) => (
              <h1 key={i} className="">
                {el}
              </h1>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavSideSheet;
