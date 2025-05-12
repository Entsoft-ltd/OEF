
import type { SVGProps } from 'react';
import { BookOpenText } from 'lucide-react';

export default function OEFLogo(props: SVGProps<SVGSVGElement> & { textClassName?: string }) {
  return (
    <div className="flex items-center">
      <BookOpenText className={props.className || "h-8 w-8 text-primary"} {...props} />
      <span className={`ml-2 text-xl font-bold text-primary ${props.textClassName || ''}`}>
        OnichaEd
      </span>
    </div>
  );
}
