import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EditCardModal from "@/widgets/modals/EditCardModal";
import EditColumnModal from "@/widgets/modals/EditColumnModal";
import CreateCardModal from "@/widgets/modals/CreateCardModal";
import CreateColumnModal from "@/widgets/modals/CreateColumnModal";
import ConfirmModal from "@/widgets/modals/ConfirmModal";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kanban Board',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/task.ico" />
      </head>
      <body className={inter.className}>
        <CreateCardModal />
        <CreateColumnModal />
        <EditCardModal />
        <EditColumnModal />
        <ConfirmModal />
        {children}</body>
    </html>
  );
}
