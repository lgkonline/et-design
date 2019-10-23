import React, { useState } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export interface IDownloadDropdownProps {
    className?: string;
    icon: any;
    label: string;
    links: { href: string; label: string; }[]
}

export const DownloadDropdown = ({ className, icon, label, links }: IDownloadDropdownProps) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret outline className={className}>
                {icon} {label}
            </DropdownToggle>
            <DropdownMenu>
                {links.map((link, index) =>
                    <DropdownItem key={index} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</DropdownItem>
                )}
            </DropdownMenu>
        </ButtonDropdown>
    );
}