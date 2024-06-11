import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="w-full bg-gray-800 flex flex-row justify-between p-5 items-center">
            <Link href="/">
                <Image
                    alt="logo"
                    src="/assets/olx-logo.png"
                    width={50}
                    height={50}
                    className="rounded-lg"
                ></Image>
            </Link>
            <Link
                href="/create_product"
                className="text-black p-2 rounded bg-green-300"
            >
                Create a product
            </Link>
        </div>
    );
}