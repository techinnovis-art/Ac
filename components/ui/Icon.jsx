'use client';

import {
  Wrench, Gauge, Sparkles, Hammer, Truck, AirVent, Fan, CircuitBoard,
  Snowflake, Cog, Droplets, Flame, Zap, BadgeCheck, Clock, ReceiptText,
  Heart, Layers, ShieldCheck, MessageCircle,
} from 'lucide-react';

const MAP = {
  Wrench, Gauge, Sparkles, Hammer, Truck, AirVent, Fan, CircuitBoard,
  Snowflake, Cog, Droplets, Flame, Zap, BadgeCheck, Clock, ReceiptText,
  Heart, Layers, ShieldCheck, MessageCircle,
};

export default function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = MAP[name] || Wrench;
  return <Cmp className={className} />;
}
