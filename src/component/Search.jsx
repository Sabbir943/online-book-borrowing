'use client';

import { SearchField } from '@heroui/react';
import React, { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Search = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('search') || '');

    const handleSearch = (value) => {

        setSearch(value);

        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className='w-10/12 mx-auto mt-10'>

            <SearchField
                className='border border-gray-400 rounded-2xl'
                name="search"
                value={search}
                onChange={handleSearch}
            >

                <SearchField.Group>
                    <SearchField.SearchIcon className='text-2xl' />

                    <SearchField.Input
                        className="w-4xl bg-base-200"
                        placeholder="Search books..."
                    />

                    <SearchField.ClearButton />
                </SearchField.Group>

            </SearchField>
        </div>
    );
};

export default Search;