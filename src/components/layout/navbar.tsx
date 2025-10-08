import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAVIGATION } from '@/lib/constants';
import { useTheme } from '@/components/theme-provider';
import { ModeToggle } from '../mode-toggle';
import logo from '@/assets/images/MBS Logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <nav className="container flex h-16 items-center">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Microbial Solutions</span>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {NAVIGATION.map((item, i) => (
              // <Link
              //   key={item.name}
              //   to={item.href}
              //   className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              // >
              //   {item.name}
              // </Link>
              <a
              rel="noreferrer noopener"
              href={item.href}
              key={i}
              className={`text-sm hover:text-primary ${buttonVariants({
                variant: "ghost",
              })}`}
            >
              {item.name}
            </a>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {theme === 'light' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}