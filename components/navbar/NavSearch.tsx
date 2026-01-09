'use client';

import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect, ChangeEventHandler } from 'react';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search')?.toString();
  const router = useRouter();
  const [search, setSearch] = useState(searchTerm || '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <Input
      type='search'
      placeholder='search product'
      className='max-w-xs dark:bg-muted'
      value={search}
      onChange={event => {
        setSearch(event.target.value);
        handleSearch(event.target.value);
      }}
    />
  );
};

export default NavSearch;

// Note:
// In server components we use the searchParams props but in
// client components we use the useSearchParams hook
