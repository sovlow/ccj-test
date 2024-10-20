import React from 'react';
import './bootstrap';
import { Button } from '@/components/ui/button.tsx';

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Button>Hello ShadCN</Button>
        </div>
    );
}
